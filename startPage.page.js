

const startPage ={
    template: `
    
    <div>
    <h1>{{title}}</h1>

    <router-link to="/treatment">Gå til Bestilling </router-link>
    
    
    </div>
    `,


data(){ 
    return  {
            title:"Velkommen til din startside:"
            }
    }
    
};
    export default startPage;