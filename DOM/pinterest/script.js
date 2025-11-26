var arr =[
    {name: "denim shirt", Image: "https://i.pinimg.com/236x/d5/4e/c3/d54ec34f131159b3c76563ae4e1c8972.jpg"},
    {name: "white shirt", Image: "https://i.pinimg.com/474x/96/d4/c8/96d4c81cb609b448686b55580b5dc2f6.jpg"},
    {name: "black shirt", Image: "https://i.pinimg.com/236x/73/97/60/739760fc6f96720f415968fca7af8715.jpg"},
    {name: "olive green shirt", Image: "https://i.pinimg.com/236x/d0/09/ef/d009efc6314338448ddac25e3ab27ee4.jpg"},
    {name: "khaki shirt", Image: "https://i.pinimg.com/236x/6a/9a/a8/6a9aa8821738ec43af66b4cb21142bcc.jpg"},
    {name: "baggy jeans", Image: "https://i.pinimg.com/474x/bc/51/19/bc5119453fdb7f9f34265d9c04b4fed5.jpg"},
    {name: "brown shirt", Image: "https://i.pinimg.com/236x/ca/63/81/ca6381f8b17007fdf74f3f9d8656f80d.jpg"},
    {name: "grey shirt", Image: "https://i.pinimg.com/236x/76/f9/9e/76f99e9b8989489c6fd235df8c57e406.jpg"},
    {name: "black and white small checks", Image: "https://i.pinimg.com/236x/f4/1b/03/f41b037f102f51102a8f590634bb3150.jpg"},
    {name: "light blue or sky blue", Image: "https://i.pinimg.com/236x/3f/9b/6f/3f9b6f873f5e562cabd1ac375da31d7e.jpg"},
    {name: "beige shirt", Image: "https://i.pinimg.com/736x/c9/cf/0c/c9cf0cddafe38c9b2023ce62fe9e77a1.jpg"},
    {name: "black and beige", Image: "https://i.pinimg.com/236x/f9/6a/8c/f96a8c57a8dac74d3fe4a39d00a2ecb2.jpg"},
    {name: "1", Image: "https://i.pinimg.com/236x/29/6e/84/296e8469288a99b003a711658f474baa.jpg"},
    {name: "2", Image: "https://i.pinimg.com/236x/84/1e/14/841e142d7950d14690c207033ea39729.jpg"},
    {name: "3", Image: "https://i.pinimg.com/236x/15/2c/21/152c21044b83451457cd28bb99d35897.jpg"},
    {name: "4", Image: "https://i.pinimg.com/236x/10/7d/5c/107d5c87cef95035f19349e46992f3fa.jpg"},
    {name: "5", Image: "https://i.pinimg.com/236x/35/bc/36/35bc364413cd948271f9390e4258502d.jpg"},
    {name: "6", Image: "https://i.pinimg.com/236x/93/ca/b1/93cab1c86c4abf471df2a2f82e094bce.jpg"},
    {name: "7", Image: "https://i.pinimg.com/474x/b2/3b/cd/b23bcda1a01843b1cc411d207f02de81.jpg"},
    {name: "8", Image: "https://i.pinimg.com/564x/94/58/a2/9458a2bb53548911efc36436959f40f4.jpg"},
    {name: "9", Image: "https://i.pinimg.com/236x/ef/ac/ea/efacea13fbb772bfd05c92ade5e7a1cf.jpg"},
    {name: "10", Image: "https://i.pinimg.com/236x/18/cd/d7/18cdd7602605e52d5dc7e000eedbcbc4.jpg"},
    {name: "11", Image: "https://i.pinimg.com/236x/19/5d/95/195d95ffb05d30856773b5a96ac81567.jpg"},
    {name: "12", Image: "https://i.pinimg.com/236x/88/c2/47/88c247d09ff10aac68c93dec4b72e77a.jpg"},
    {name: "13", Image: "https://i.pinimg.com/236x/2c/f2/7d/2cf27d696f6d77a0122f5698b62a35cc.jpg"},
    {name: "14", Image: "https://i.pinimg.com/236x/c5/2d/ba/c52dbad3d14381e8a068f9235f214ea9.jpg"},
    {name: "15", Image: "https://i.pinimg.com/736x/47/bb/5d/47bb5d8c035fce7af3b8024821c795b5.jpg"}
]
function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.Image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })
    document.querySelector(".container")
    .innerHTML = clutter;

}

function handleSearchFuntionality(){
    var input =  document.querySelector("#searchinput");
    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
     const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
     var clutter = "";
     filteredArray.forEach(function(obj){
         clutter += `<div class="res flex px-8 py-3">
         <i class="ri-search-line font-semibold mr-5"></i>
         <h3 class="font-semibold">${obj.name}</h3>
     </div>`
     })
 document.querySelector(".searchdata").style.display = "block";
     document.querySelector(".searchdata").innerHTML = clutter;
 })
}

handleSearchFuntionality()
showTheCards();