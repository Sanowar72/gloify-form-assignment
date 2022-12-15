// console.log("hello world!");
const image_input = document.querySelector("#image_input");


var uploaded_image = " ";

image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        console.log(uploaded_image, "hello");
        document.querySelector("#display_img").style.display = "block";
        document.querySelector("#display_img").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);

})