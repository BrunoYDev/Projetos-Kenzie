let departmentList = [
    {
      departmentName: 'Financial',
      employees:
      [
        {
          name: 'Rose',
          age: 26,
          responsibility: 'Financial director',
          salary: 5600
        },
        {
          name: 'Stevem',
          age: 32,
          responsibility: 'Financial manager',
          salary: 4200
        },
        {
          name: 'Beca',
          age: 26,
          responsibility: 'Financial analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Expedition',
      employees:
      [
        {
          name: 'Rooper',
          age: 35,
          responsibility: 'Expedition director',
          salary: 5600
        },
        {
          name: 'Maggie',
          age: 22,
          responsibility: 'Expedition manager',
          salary: 4200
        },
        {
          name: 'Thompson',
          age: 41,
          responsibility: 'Expedition analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Capitation',
      employees:
      [
        {
          name: 'Saory',
          age: 35,
          responsibility: 'Capitation director',
          salary: 5600
        },
        {
          name: 'Silvia',
          age: 22,
          responsibility: 'Capitation manager',
          salary: 4200
        },
        {
          name: 'Sonem',
          age: 41,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Havi',
          age: 41,
          responsibility: 'Trainee Capitation manager',
          salary: 1500
        },
        {
          name: 'Margie',
          age: 25,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Victoria',
          age: 18,
          responsibility: 'Trainee Capitation analyst',
          salary: 1500
        }
      ],
      working: true
    },
  ]
  
function howManyDepartments(){
    let cont = 0;
    for(let i=0; i < departmentList.length;i++){
        let countDeparts = departmentList[i].departmentName;
        if(departmentList[i].departmentName){
            cont++;
        }
    }
    return `Existem ${cont} Departmanetos na empresa.`;
}
// console.log(howManyDepartments());

function changeDepartmentName(depName,newDepName){
        for(let i=0; i < departmentList.length;i++){
            if(depName == departmentList[i].departmentName){
                departmentList[i].departmentName = newDepName;
                return departmentList[i];
            }else{
                return `Department Not Found.`
            }
        }
        
}

// console.log(changeDepartmentName('Financial','Balacobaco'));

function giveTheDepartmentABreak(dep){
    for(let i=0;i<departmentList.length; i++){
        if(dep == departmentList[i].departmentName){
            if(departmentList[i].working){
                departmentList[i].working = false;
                return departmentList[i];
            }else{
                departmentList[i].working = true;
                return departmentList[i];
            }
    }
}
}
// console.log(giveTheDepartmentABreak('Financial'));

function howManyEmployeesInDepartment(depName){
    let count = 0;
    for(let i=0; i<departmentList.length;i++){
        if(depName == departmentList[i].departmentName){
            for(let j=0; j<departmentList[i].employees.length;j++){
                count++;
            }
            return `Há ${count} Empregados no departamento ${depName}`;
        }
    }
    return "Department not found."
}
    // console.log(howManyEmployeesInDepartment('Expedition'));

    let pessoa = {
          name: 'Felipe',
          age: 35,
          responsibility: 'Financial analyst',
          salary: 4600
    };
    function insertNewEmployeeInDepartment(depName,person){
        for(let i=0;i<departmentList.length;i++){
            if(departmentList[i].departmentName == depName){
                departmentList[i].employees.push(person)
                return departmentList[i];
            }
        }
    }
    console.log(insertNewEmployeeInDepartment('Financial',pessoa));
