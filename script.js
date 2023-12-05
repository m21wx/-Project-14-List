	let f = document.querySelector('.list form');
	let inName = document.getElementById('inName');
	let s = document.getElementById('s');
	let ul  = document.querySelector('ul');
	
		// get LocalStorage
		let list = JSON.parse(localStorage.getItem('localList')) || []
		
		
		// عرض البينات 
		function addList(){
			ul.innerHTML ='';
		for(let i = 0 ; i < list.length ; i++){
			let addLi =`
					<li>
						<span class='name'> ${list[i]}</span> 
						<span><i id =${i} class="ub fa-solid fa-pen"></i></span>
						<span><i id=${i}  class="de fa-solid fa-trash-can"></i></span>
					</li>
			`;
			ul.innerHTML += addLi
		}

		}
		addList()
		
	let sName = document.querySelector('.name')
	let iub = document.querySelectorAll('.ub')
	let sde = document.querySelectorAll('.de')



	let add = false;
	let index = 0;
		// عمليات الاضافة والتعديل 
		s.addEventListener('click', addName)
		function addName(e){
			e.preventDefault()

			let value = inName.value;
			if(value !=='' && add == false){
			list.push(value)
			}
			else if(value !=='' && add == true){
				console.log('najd')
				list[index]	= value;
				add =false;
			}else{
		
			}	
			setLocl()
			addList()
			inName.value ='';	
		}



		// حذف البينات 
		sde.forEach(e=>{
			e.onclick =()=>{
			console.log(parseInt( e.id))	
			list.splice(parseInt( e.id),1)
			setLocl()
			addList()
			}
		})

		// تعديل البينات 
		iub.forEach(e=>{
			e.onclick =()=>{
			index = parseInt( e.id) ;
			add = true;
			inName.value = list[index]	
			}
		})
		// set LocalStorage
		function setLocl(){
			localStorage.setItem('localList', JSON.stringify(list))
		}
		setLocl()
		
		

