import { useRef } from "react";
import classes from "./NewPropertyForm.module.css";
function NewPropertyForm(props) {
  const title = useRef();
  const area = useRef();
  const city = useRef();
  const image = useRef();
  // const furnish = useRef();
  const latitude = useRef();
  const longitude = useRef();
  const postalCode = useRef();
  // const type = useRef();
  const rent = useRef();
  const additionalCosts = useRef();
  const deposit = useRef();
  // const energyLabel = useRef();
  // const gender = useRef();
  const internet = useRef();
  // const kitchen = useRef();
  // const living = useRef();
  const matchCapacity = useRef();
  const maxMatchAge = useRef();
  const minMatchAge = useRef();
  // const matchLanguage = useRef();
  // const matchStatus = useRef();
  const description = useRef();
  // const pets = useRef();
  // const registrationCost = useRef();
  // const matchCapacity = useRef();
  // const shower = useRef();
  // const smoking = useRef();
  // const toilet = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const formData = {
      title: title.current.value,
      area: area.current.value,
      city: city.current.value,
      image: image.current.value,
      longitude: longitude.current.value,
      latitude: latitude.current.value,
      postalCode: postalCode.current.value,
      rent: rent.current.value,
      additionalCosts: additionalCosts.current.value,
      deposit: deposit.current.value,
      internet: internet.current.value,
      matchAge: maxMatchAge.current.value +  "-" +  minMatchAge.current.value,
      description: description.current.value,
      matchCapacity: matchCapacity.current.value,
    };
    props.onAddProp(formData);
  }

  return (
    <div className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={title}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Image</label>
          <input type="url"  ref={image} />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor="type">type</label>
          <input type="text" required id="type" ref={type} />
        </div> */}
        <div className={classes.control}>
          <label htmlFor="postalcode">postalcode</label>
          <input type="text" required id="postalCode" ref={postalCode} />
        </div>
        <div className={classes.control}>
          <label htmlFor="area">area</label>
          <input type="number" required id="area" ref={area} />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">city</label>
          <input type="text" required id="city" ref={city} />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor="furnish">furnish</label>
          <input type="text" required id="area" ref={furnish} />
        </div> */}
        <div className={classes.control}>
          <label htmlFor="longitude">longitude</label>
          <input type="text" required id="longitude" ref={longitude} />
        </div>
        <div className={classes.control}>
          <label htmlFor="latitude">latitude</label>
          <input type="text" required id="latitude" ref={latitude} />
        </div>
        <div className={classes.control}>
          <label htmlFor="rent">rent</label>
          <input type="number" required id="rent" ref={rent} />
        </div>
        <div className={classes.control}>
          <label htmlFor="additionalCosts">additional cost</label>
          <input
            type="number"
            required
            id="additionalCosts"
            ref={additionalCosts}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="deposit">deposit</label>
          <input type="number" required id="deposit" ref={deposit} />
        </div>
        <div className={classes.control}>
          <label htmlFor="matchCapacity">free rooms</label>
          <input type="number" required id="matchCapacity" ref={matchCapacity} />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor="energyLabel">energylabel</label>
          <input type="text" required id="energyLabel" ref={energyLabel} />
        </div>
        <div className={classes.control}>
          <label htmlFor="matchLanguage">matchLanguage</label>
          <input type="text" required id="matchLanguage" ref={matchLanguage} />
        </div>
        <div className={classes.control}>
          <label htmlFor="matchStatus">matchStatus</label>
          <input type="text" required id="matchStatus" ref={matchStatus} />
        </div>
        <div className={classes.control}>
          <label htmlFor="matchStatus">matchStatus</label>
          <input type="text" required id="matchStatus" ref={matchStatus} />
        </div>
        <div className={classes.control}>
          <label htmlFor="additionalCosts">additionalCosts</label>
          <input
            type="number"
            required
            id="additionalCosts"
            ref={additionalCosts}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="registrationCost">registrationCost</label>
          <input
            type="number"
            required
            id="registrationCost"
            ref={registrationCost}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="matchCapacity">matchCapacity</label>
          <input type="number" required id="matchCapacity" ref={matchCapacity} />
        </div>
        <div className={classes.control}>
          <label>
            Gender:
            <select ref={gender}>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </label>
        </div> */}
        <div className={classes.control}>
          <label>
            Internet:
            <select ref={internet}>
              <option value="included">included</option>
              <option value="excluded">excluded</option>
            </select>
          </label>
        </div>
        {/* <div className={classes.control}>
          <label>
            kitchen:
            <select ref={kitchen}>
              <option value="shared">shared</option>
              <option value="private">private</option>
            </select>
          </label>
        </div>
        <div className={classes.control}>
          <label>
            shower:
            <select ref={shower}>
              <option value="shared">shared</option>
              <option value="private">private</option>
            </select>
          </label>
        </div>
        <div className={classes.control}>
          <label>
            toilet:
            <select ref={toilet}>
              <option value="shared">shared</option>
              <option value="private">private</option>
            </select>
          </label>
        </div>
        <div className={classes.control}>
          <label>
            kitchen:
            <select ref={living}>
              <option value="shared">shared</option>
              <option value="private">private</option>
            </select>
          </label>
        </div>
        <div className={classes.control}>
          <label>
            pets:
            <select ref={pets}>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </label>
        </div>
        <div className={classes.control}>
          <label>
            smoking:
            <select ref={smoking}>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </label>
        </div> */}
        <div className={classes.control}>
          <label>
            required age (min to max):
            <input name="min age" type="number" ref={minMatchAge} />
            to
            <input name="max age" type="number" ref={maxMatchAge} />
          </label>
        </div>
        {/* <div className={classes.control}>
          <label>
            prefered age (min to max):
            <input name="min age" type="number" ref={minMatchAge} />
            to
            <input name="max age" type="number" ref={maxMatchAge} />
          </label>
        </div> */}

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={description}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Property</button>
        </div>
      </form>
    </div>
  );
}
export default NewPropertyForm;
