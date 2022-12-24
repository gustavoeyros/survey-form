//routes
const rootRoute: String = "/pages";
const firstPage: String = "/" || "/index.html";
const secondPage: String = `${rootRoute}/second-page.html`;
const thirdPage: String = `${rootRoute}/third-page.html`;
const fourthPage: String = `${rootRoute}/fourth-page.html`;
const fifthPage: String = `${rootRoute}/fifth-page.html`;
const sixthPage: String = `${rootRoute}/sixth-page.html`;

function pageNavigate(url: String) {
  window.location.href = `${rootRoute}${url}.html`;
}

// -------------------------- NAVIGATION ------------------------------

//first page
if (window.location.pathname === firstPage) {
  const letsGoButton = document.getElementById(
    "letsgo-button"
  )! as HTMLButtonElement;

  letsGoButton.addEventListener("click", () => {
    pageNavigate("/second-page");
  });
}

//second page
if (window.location.pathname === secondPage) {
  const fillFormButton = document.getElementById(
    "fill-form-btn"
  )! as HTMLButtonElement;
  fillFormButton.addEventListener("click", () => {
    pageNavigate("/third-page");
  });
}

//third page
if (window.location.pathname === thirdPage) {
  const thirdSkipButton = document.getElementById(
    "third-skip-btn"
  )! as HTMLButtonElement;
  thirdSkipButton.addEventListener("click", () => {
    pageNavigate("/fourth-page");
  });

  let nextButton = document.getElementById("nextButton")! as HTMLButtonElement;
  nextButton.addEventListener("click", () => {
    pageNavigate("/fourth-page");
  });

  //check radio

  const radiosButtons = document.querySelectorAll(
    "input[name='options-form']"
  )! as NodeListOf<Element>;

  const x = radiosButtons.forEach((input: any) => {
    input.addEventListener("click", () => {
      if (input) {
        nextButton.disabled = false;
      }
    });
  });
}

//fourth page
if (window.location.pathname === fourthPage) {
  const fourthSkipButton = document.getElementById(
    "fourth-skip-btn"
  )! as HTMLButtonElement;

  fourthSkipButton.addEventListener("click", () => {
    pageNavigate("/fifth-page");
  });
}

//fifth page
if (window.location.pathname === fifthPage) {
  const fifthSkipButton = document.getElementById(
    "fifth-skip-btn"
  )! as HTMLButtonElement;

  fifthSkipButton.addEventListener("click", () => {
    pageNavigate("/sixth-page");
  });

  let nextButton = document.getElementById("nextButton")! as HTMLButtonElement;

  nextButton.addEventListener("click", () => {
    pageNavigate("/sixth-page");
  });

  // Character Counter
  let textAtArea = document.getElementById(
    "textarea-fifth"
  )! as HTMLTextAreaElement;

  let result = document.getElementById("result")! as HTMLElement;
  let limitText = 130;
  result.textContent = 0 + "/" + limitText;

  textAtArea.addEventListener("input", () => {
    let txtLength = textAtArea.value.length;
    result.textContent = txtLength + "/" + 130;

    if (txtLength >= 120) {
      result.style.color = "red";
    } else {
      result.style.color = "rgba(0, 0, 0, 0.35)";
    }

    if (txtLength > 0) {
      nextButton.disabled = false;
    } else if (txtLength === 0) {
      nextButton.disabled = true;
    }
  });
}
