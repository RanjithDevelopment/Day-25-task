import React from "react";
import Sidebarcomponent from './Sidebar';
import Topbar from "./Topbar";
function BlankPage(){
    return(
        // <!
        // / <!-- Page Wrapper -->
    <div id="wrapper">

        {/* <!-- End of Sidebar --> */}
<Sidebarcomponent/>
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
               <Topbar/>
                {/* <!-- End of Topbar --> */}
        <div class="container-fluid">

            {/* <!-- Page Heading --> */}
            <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>

        </div>
         {/* <!-- /.container-fluid --> */}

    </div>
    {/* // <!-- End of Main Content --> */}
    </div>
    </div>
    );
}
export default BlankPage;