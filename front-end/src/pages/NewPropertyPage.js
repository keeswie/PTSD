import NewPropertyForm from "../component/properties/NewPropertyForm";
function NewPropertyPage() {
  function addPropHandler(formData){
    fetch('http://localhost:3000/properties',
    {
      method:'POST',
      body: JSON.stringify(formData),
      headers:{
        'Content-Type': 'application/json'
      }
    });
  }
  
  return <section>
      <h1>Add new property</h1>
      <NewPropertyForm onAddProp={addPropHandler}/>
  </section>;
}

export default NewPropertyPage;
