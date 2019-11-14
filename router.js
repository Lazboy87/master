import startPage from "/startPage.page.js";
import timePage from "/time.page.js";
import treatmentPage from "/treatment.page.js";
import datePage from "/date.page.js";
import contactInfo from "/contactinfo.page.js";
import logginnPage from "/logginn.page.js";
import summary from "/summary.page.js";
import profile from "/profile.page.js";




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

                {
                    path: '/summary',
                    component: summary
                },

                {
                    path: '/profile',
                    component: profile
                },
               
                
            ]
    
});

export default router;