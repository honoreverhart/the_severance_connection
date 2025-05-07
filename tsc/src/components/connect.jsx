export default function Connect() {
  return (
    <>
      <div>
        <h1>Connect</h1>
        <div>
          <h2>Find Your Community!</h2>
          <form>
            <label>
              Name: <input type="text" required />
            </label>
            <label>
              Email: <input type="email" required />
            </label>
            <label>
                Message: <input type="text" required/>
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
