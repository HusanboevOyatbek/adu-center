let path = new URLSearchParams(location.search);


let id = path.get("teacherid")

let students = document.getElementById("students");

async function getStudents() {
    try {
        let res = await axios(id ? `https://69149aa43746c71fe048ece9.mockapi.io/teachers/${id}/Students` : "https://69149aa43746c71fe048ece9.mockapi.io/Students" )

        res?.data.map((el) => {
            students.innerHTML += `
            <div class="w-full max-w-[500px] bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-lg">
                    <div class="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown"
                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            type="button">
                            <span class="sr-only">Open dropdown</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 16 3">
                                <path
                                    d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div id="dropdown"
                            class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                            <ul class="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">View
                                        Profile</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                                        Data</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex flex-col items-center pb-10">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover border border-gray-300"
                            src=${el.avatar} alt="Myriam O'Keefe image" />

                        <h5 class="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                            ${el.firstName} ${el.lastName}
                        </h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">${el.profession}</span>

                        <div class="flex justify-center gap-3 mt-3 text-sm text-gray-600 dark:text-gray-300">
                            <span class="flex items-center gap-1">
                                <strong>Exp:</strong> ${el.experiens}
                            </span>
                            <span class="flex items-center gap-1">
                                <strong>Age:</strong> ${el.age}
                            </span>
                            <span class="flex items-center gap-1">
                                ⭐ ${el.rating}
                            </span>
                        </div>


                        <div class="mt-4 w-full px-6">
                            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-sm">
                                <p><strong>📞 Phone:</strong> ${el.phone}</p>
                                <p><strong>✈ Telegram:</strong> ${el.telegram} </p>
                                <p><strong>🔗 LinkedIn:</strong> ${el.linkkedin}</p>
                                <p><strong>📧 Email:</strong> ${el.emile}</p>
                            </div>
                        </div>

                        <div class="flex mt-5">
                            <a href="../pages/stutents.html?teacherid=${el.id}"
                                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all">
                                Edit
                            </a>
                            <a href="#"
                                class="py-2 px-4 ms-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-transparent hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 transition-all">
                                Delete
                            </a>
                        </div>
                    </div>
                </div>
            `
        })

    } catch (err) {
        console.log(err);

    }
}

getStudents()