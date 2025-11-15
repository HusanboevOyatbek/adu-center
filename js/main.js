let teachers = document.getElementById("teachers");
let addTeacherBtn = document.getElementById("dropdown-button")
let outerModal = document.getElementById("outer-modals")
let innerMadal = document.getElementById("iner-madal")
let selact = null

async function getTeacher() {
    try {
        let res = await axios("https://69149aa43746c71fe048ece9.mockapi.io/teachers")
        teachers.innerHTML = "";
        res?.data.map((el) => {
            teachers.innerHTML += `
            <div class="w-full max-w-[500px] bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-lg">
                    <div class="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown"
                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            type="button">
                            <span class="sr-only">Open dropdown</span>
                             <button
                             onClick="editTeacher(${el.id})"
                                class=" cursor-pointer py-2 px-4 ms-2 text-sm font-medium text-white bg-blue-400 rounded-lg border border-transparent hover:bg-green-700 focus:ring-4  ">
                                Edit
                            </button>
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
                            ${el.firstName} , ${el.lastName}
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
                                All Students
                            </a>


                            <button
                            onClick="deletelTeacher(${el.id})"
                                class=" cursor-pointer py-2 px-4 ms-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-transparent hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 transition-all">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            `
        })

    } catch (err) {
        console.log(err);

    }
}

getTeacher()



//**BTN str */

async function deletelTeacher(id) {
    try {
        await axios.delete(`https://69149aa43746c71fe048ece9.mockapi.io/teachers/${id}`)
        getTeacher()

    } catch (err) {
        console.log(err);
    }
}

async function editTeacher(id) {
    outerModal.classList.remove("hidden");
    selact = id;
    try {
        let res = await axios.get(`https://69149aa43746c71fe048ece9.mockapi.io/teachers/${id}`)
        console.log(res.data);

        innerMadal[0].value = res.data.emile
        innerMadal[1].value = res.data.photro
        innerMadal[2].value = res.data.firstName
        innerMadal[3].value = res.data.lastNAme
        innerMadal[4].value = res.data.avatar
        innerMadal[5].value = res.data.profession
        innerMadal[6].value = res.data.experiens
        innerMadal[7].value = res.data.age
        innerMadal[8].value = res.data.reating
        innerMadal[9].value = res.data.linkkedin
        innerMadal[10].value = res.data.telegram
        innerMadal[11].value = res.data.gender
    } catch (err) {
        console.log(err);

    }
}

//**BTN end */


//** modal str*/
addTeacherBtn.addEventListener("click", function () {
    outerModal.classList.remove("hidden")
    console.log(outerModal);

})

outerModal.addEventListener("click", function () {
    outerModal.classList.add("hidden")
    selact = null
    innerMadal[0].value = ""
    innerMadal[1].value = ""
    innerMadal[2].value = ""
    innerMadal[3].value = ""
    innerMadal[4].value = ""
    innerMadal[5].value = ""
    innerMadal[6].value = ""
    innerMadal[7].value = ""
    innerMadal[8].value = ""
    innerMadal[9].value = ""
    innerMadal[10].value = ""
    innerMadal[11].value = false;
})


innerMadal.addEventListener("click", function (e) {
    e.stopPropagation()
})



innerMadal.addEventListener("submit", async function (e) {
    e.preventDefault();
    let options = {}
    options.emile = e.target[0].value;
    options.photro = e.target[1].value;
    options.firstName = e.target[2].value
    options.lastNAme = e.target[3].value
    options.avatar = e.target[4].value
    options.profession = e.target[5].value
    options.experiens = e.target[6].value
    console.log(options.age = e.target[7].value);

    options.reating = e.target[8].value;
    options.linkkedin = e.target[9].value;
    options.telegram = e.target[10].value;
    options.gender = e.target[11].checked;

    try {
        selact ? await axios.put(`https://69149aa43746c71fe048ece9.mockapi.io/teachers/${selact}`, options) : await axios.post(`https://69149aa43746c71fe048ece9.mockapi.io/teachers`, options)
        getTeacher()
        selact = null
        innerMadal[0].value = ""
        innerMadal[1].value = ""
        innerMadal[2].value = ""
        innerMadal[3].value = ""
        innerMadal[4].value = ""
        innerMadal[5].value = ""
        innerMadal[6].value = ""
        innerMadal[7].value = ""
        innerMadal[8].value = ""
        innerMadal[9].value = ""
        innerMadal[10].value = ""
        innerMadal[11].value = false;
        outerModal.classList.add("hidden")
    } catch (err) {
        console.log(err);

    }
});
//** modal end*/
