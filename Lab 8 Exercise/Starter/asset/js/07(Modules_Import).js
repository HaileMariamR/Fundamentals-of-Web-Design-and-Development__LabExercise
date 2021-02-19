//1. Import the myVar as destructuring
import {myVar as destructuring} from './07(Modules_Export).js' 

//2. Display the Var [remove the string when you have the variable]
simple_import.innerHTML = `${destructuring}`;


//3. Import the exp1 fun as destructuring
import {exp1 as destructuring1 } from './07(Modules_Export).js'

//4. Display the exp1 [remove the string when you have the variable]
list_import.innerHTML = `${destructuring1()}`;

//5. Import the aliased function as destructuring
import {exp2 as destructuring2} from './07(Modules_Export).js'

//6. Display the exp2_Alias [remove the string when you have the variable]
exp_alias.innerHTML = `${destructuring2()}`;

//7. Import exp3 as alias function as destructuring
import {exp3 as destructuring3} from './07(Modules_Export).js' 
//8. Display the exp3_alias() [remove the string when you have the variable]
imp_alias.innerHTML = `${destructuring3()}`;

// 9 import All (*) as imp_all 
import * as imp_all from './07(Modules_Export).js'

//10. Display on the UL
import_all.innerHTML = `

<li class="list-group-item" > ${imp_all.myVar} </li>
<li class="list-group-item" >${imp_all.exp1()}</li>
<li class="list-group-item" >${imp_all.exp2_Alias()}</li>
<li class="list-group-item" > ${imp_all.exp3()}</li>

`;