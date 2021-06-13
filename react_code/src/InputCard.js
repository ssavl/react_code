import React from 'react'


export default (props) => (
<div className="container mt-3 text-center">

    <form class="needs-validation" novalidate style={{width: "22rem"}}>
    <div id="validation" class="form-outline">
        <input onChange={props.userData} name="name" type="text" id="form6" className="form-control" placeholder="Имя" style={{ backgroundColor: '#E5E4E2' }}/>
        
        <input onChange={props.userData} name="age" type="text" id="form5" className="form-control mt-2" placeholder="Возраст" style={{ backgroundColor: '#E5E4E2' }}/>
        
    
    </div>

    <button type="submit" id="submit" class="btn btn-primary btn-sm mt-3">
        Изменить
    </button>
    </form>

</div>

)