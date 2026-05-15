import { Routes } from '@angular/router';
import { Getuser} from './getuser/getuser'
import { Getallusers } from './getallusers/getallusers';
import { Adduser } from './adduser/adduser';
import { Updateuser } from './updateuser/updateuser';
import { Deleteuser } from './deleteuser/deleteuser';

export const routes: Routes = [
    {path:'',component:Getallusers},
    {path:'retrieveuser',component:Getuser},
    {path:'adduser',component:Adduser},
    {path:'updateuser',component:Updateuser},
    {path:'deleteuser',component:Deleteuser},
    {path:'**',redirectTo:''}
];