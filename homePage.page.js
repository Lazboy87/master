

const HomePage ={
    template: `
    
    <div>
    <h1>{{title}}</h1>

    <router-link to="/treatment">Gå til Bestilling </router-link>
    
    
    </div>
    `,


data(){ 
    return  {
            title:"Velkommen til min side"
            }
    }
    
};
    export default HomePage;