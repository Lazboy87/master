import startPage from "/startPage.page.js";
import timePage from "/time.page.js";
import treatmentPage from "/treatment.page.js";
import datePage from "/date.page.js";
import contactInfo from "/contactinfo.page.js";
import logginnPage from "/logginn.page.js";




 const router = new VueRouter(
     
    {
        
     routes:[

        
                {
                    path: '/',
                    component: logginnPage

                },
                {
                    path: '/startpage',
                    component: startPage

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