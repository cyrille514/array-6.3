
        // Array de objetos como pide el ejercicio
        let tasks = [
            { nombre: "hello", importancia: "media", fechaTope: "2026-05-11" },
            { nombre: "hola", importancia: "alta", fechaTope: "2026-05-11" }
        ];

        function renderTasks() {
            const listElement = document.getElementById('taskList');
            listElement.innerHTML = '';
            
            tasks.forEach((task, index) => {
                const item = `
                    <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 relative">
                        <div class="flex items-center mb-1">
                            <span class="bg-indigo-100 text-[#6343ED] w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-black mr-3">
                                ${index + 1}
                            </span>
                            <span class="text-gray-800 font-bold capitalize">${task.nombre}</span>
                        </div>
                        <div class="ml-9 text-[11px] text-gray-500 flex gap-3">
                            <span class="px-2 py-0.5 bg-gray-200 rounded-full font-bold">⚠️ ${task.importancia}</span>
                            <span class="px-2 py-0.5 bg-gray-200 rounded-full font-bold">📅 ${task.fechaTope}</span>
                        </div>
                    </div>
                `;
                listElement.innerHTML += item;
            });
        }

        function addTask() {
            const nombre = document.getElementById('taskInput').value;
            const importancia = document.getElementById('importanceInput').value;
            const fecha = document.getElementById('dateInput').value;

            if (nombre.trim() !== "" && fecha !== "") {
                // Se guarda como objeto
                tasks.push({
                    nombre: nombre,
                    importancia: importancia,
                    fechaTope: fecha
                });
                
                // Limpiar campos
                document.getElementById('taskInput').value = "";
                document.getElementById('dateInput').value = "";
                renderTasks();
            } else {
                alert("Por favor, rellena todos los campos.");
            }
        }

        function deleteLastTask() {
            tasks.pop();
            renderTasks();
        }

        function exitApp() {
            if(confirm("¿Deseas cerrar la aplicación?")) {
                document.body.innerHTML = `<div class="text-center"><h1 class="text-2xl font-bold text-gray-700">Sesión Finalizada</h1></div>`;
            }
        }

        renderTasks();
    
