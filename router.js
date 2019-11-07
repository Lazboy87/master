import HomePage from "/HomePage.page.js";
import timePage from "/time.page.js";
import treatmentPage from "/treatment.page.js";
import datePage from "/date.page.js";
import contactInfo from "/contactinfo.page.js";




 const router = new VueRouter(
     
    {
        
     routes:[


                {
                    path: '/',
                    component: HomePage

                },
                {
                    path: '/time',
                    component: timePage

                },

                {
                    path: '/treatment',
                    component: treatmentPage
                },

                {

                    path: '/datefyso',
                    component: datePage

                },
                {

                    path: '/dateoso',
                    component: datePage

                },
                {

                    path: '/datekost',
                    component: datePage

                },
                {

                    path: '/dateaku',
                    component: datePage

                },

                {
                    path: '/contactinfo',
                    component: contactInfo
                    
                },



            ]
    
});

export default router;