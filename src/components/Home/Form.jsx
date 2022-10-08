import React from 'react';

export const Form = () => {
  return (
    <div className="container">
      <div className="form-title">
        <h2>CONTACT US</h2>
      </div>
      <form className="form">
        <div class="parent">
          <div class="div1">
            <label htmlFor="first-name">First name</label>
            <input type="text" name="first-name" aria-label="first name" />
          </div>
          <div class="div2">
            <label htmlFor="mi">MI</label>
            <input type="text" name="mi" />
          </div>
          <div class="div3">
            <label htmlFor="last-name">Last name</label>
            <input type="text" name="last-name" aria-label="last name" />
          </div>
          <div class="div4">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" aria-label="address" />
          </div>
          <div class="div5">
            <label htmlFor="second-address">Second address</label>
            <input
              type="text"
              name="second-address"
              aria-label="second address"
            />
          </div>
          <div class="div6">
            <label htmlFor="zip">Zip</label>
            <input type="text" name="zip" aria-label="zip" />
          </div>
          <div class="div7">
            <label htmlFor="city">City</label>
            <input type="text" name="city" aria-label="city" />
          </div>
          <div class="div8">
            <label htmlFor="county">County</label>
            <input type="text" name="county" aria-label="county" />
          </div>
          <div class="div9">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
