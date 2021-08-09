const taskList = []; //Asgning Array for task to do list
const badList = []; ////Asgning Array for task notodo list
const hrPerWeek = 168; //asigining variables  


//step 1 to create handling submit
const handleOnSubmit = e => {
	const frmData = new FormData(e);
	const task = frmData.get("task");
	const hr = +frmData.get("hr");

	//return if hours in not valid
	if (hr < 1) return;

	const newTask = {
		task,
		hr,
	};

	const ttlHrs = taskList.reduce((subTtl, row) => (subTtl += row.hr), 0);

	if (hrPerWeek < ttlHrs + hr) {
		return alert("You do not have enough hours left to add this task");
	}
	taskList.push(newTask);

	displayTask();
	totalTaskHours();
};

const displayTask = () => {
	let str = "";

	taskList.map((item, index) => {
		str += `<li>
    <div class="items">
      <span class="item">
        <input type="checkbox" />
        <label for="">${item.task} </label>
      </span>
      <span class="hrs">${item.hr}hr/w</span>
      <button onclick="markAsNotToDo(${index})">Mark Not To Do</button>
    </div>
  </li>`;
	});

	document.getElementById("task-list").innerHTML = str;
};

const displayBadTaskList = () => {
	let str = "";

	badList.map((item, index) => {
		str += `<li>
    <div class="items">
      <span class="item">
        <input type="checkbox" />
        <label for="">${item.task} </label>
      </span>
      <span class="hrs">${item.hr}hr/w</span>
      <button onclick="markAsToDo(${index})">Mark To Do</button>
	  <button onclick="deleteValue(${index})">Delete</button>
    </div>
  </li>`;
	});

	document.getElementById("bad-list").innerHTML = str;
	totalBadHours();
};

const markAsNotToDo = i => {
	//2. take item form task array to bad array
	const itm = taskList.splice(i, 1)[0];
	badList.push(itm);

	displayTask();
	displayBadTaskList();
};

const markAsToDo = i => {
	const itm = badList.splice(i, 1)[0];
	taskList.push(itm);

	displayTask();
	displayBadTaskList();
};

const totalTaskHours = () => {
	const ttlHrs = taskList.reduce((subTtl, row) => (subTtl += row.hr), 0);

	document.getElementById("totalHrs").innerText = ttlHrs;
};

const totalBadHours = () => {
	const ttlHrs = badList.reduce((subTtl, row) => (subTtl += row.hr), 0);

	document.getElementById("totalBadHrs").innerText = ttlHrs;
};
//to delete an items from task array

const deleteItem = i => {
	const deleteValue = taskList.splice(i, 1)[0];
	displayTask()
	totalTaskHours()
	alert(deleteValue + "has been delted.")

}
