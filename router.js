import HomePage from "/pages/homePage.page";
import timePage from "/pages/time.page";
import treatmentPage from "/pages/treatment.page";
import datePage from "/pages/date.page";




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

                    path: '/date',
                    component: datePage

                },

                {
                    path: '/contactinfo',
                    component: contactInfo
                    
                },



            ]
    
});

export default router;