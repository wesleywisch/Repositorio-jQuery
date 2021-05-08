        // eventos
// $(".titulo").click(() =>{
//     console.log("click")
// })

// $(".titulo").mouseenter(() =>{
//     console.log("mouse enter")
// })

// $(".titulo").mouseleave(() =>{
//     console.log("mouse leave")
// })

// $(".titulo").dblclick(() =>{
//     console.log("double click")
// })

        // animações

// $("#button").click(() =>{
//     $("#square").fadeToggle()
// })

// $("#button").click(() =>{
//     $("#square").fadeIn()
// })

// $("#button").click(() =>{
//     $("#square").fadeTo(1000, 0.5)
// })

// $("#button").click(() =>{
//     $("#square").fadeOut()
// })

// $("#button").click(() =>{
//     $("#square").slideDown (1000, 0.5)
// })

// $("#button").click(() => {
//     $("#square").animate({height: 700, width: 700}, 3000)
// })

// $("#stop").click(() =>{
//     $("#square").stop()
// })

        // callback

// function callBack(){
//     $("#square").show(2000)
// }

// $("#button").click(() =>{
//     $("#green").hide(2000, callBack)
// })

        //selecionando elementos filhos

// $("#lista1 > .item2").hide()

// let lista1 = $("#lista1");

// lista1.find(".item2").hide(); // o find da para ver todos os filhos, netos, bisavos etc.
// lista1.children(); // mostra todos os filhos e somente os filhos

        // encadeamento

// let jq = $("#lista1").slideUp(2000).slideDown(2000);

// console.log(jq)


        // lendo o conteudo de um elemento

// console.log($("h1").html()); // com o html ele pega todo o conteudo do que selecionamos
// console.log($("#lista1").text());  // e com o text ele pega apenas o texto.
// console.log($("#novo").val()); // ele pega o valor do elemento
// console.log($("#novo").attr("name")); // ele pega o atributo do elemento

                
        // modificando o conteudo

// console.log($("h1").text("Lista de compras"));
// console.log($("#lista1").html("<li>Novo item1</li> <li>Nova comprar</li>"));
// console.log($("li").attr("name", "Item"));

// console.log($("li").attr("name", (i, oValue) =>{
//         return oValue + i;
// }));      

// console.log($("input").attr("maxlength", 5)) // limita o tamanho de escrita no input
// console.log($("input").attr("maxlength", 5).attr("type", "password"))

        // selecionando elementos por atributos

// console.log($("[key = 2]").remove()); 

// $("#lista1").find("[key = 2]").remove()

        // removendo elementos

// $("#lista1").empty(); // remove apenas os filhos e nao a lista inteira essa é a diferença para o remove
// $("li").remove(".item2 , .item3");
// $(".item2").remove();

        // inserindo elementos

// let lista1 = $("#lista1");

// lista1.append("<li>Novo teste no bottom</li>"); // coloca o item novo no final da lista
// lista1.prepend("<li>Item teste no top</li>"); // coloca o item novo no inicio da lista

// lista1.after("<li>After</li>"); // ele adiciona antes nao dentro, adicona fora mais antes
// lista1.before("<li>before</li>"); // ele adiciona depois nao dentro, adiciona fora mais depois

// let rect = $(".rect");
// rect.after("Novo teste");

        // modificando o css

// setTimeout(()=>{
//         $("h1").addClass("bg-blue");

// }, 1000);

// setTimeout(()=>{
//         $("h1").removeClass("bg-blue");
// }, 3000);

// setTimeout(()=>{
//         $("h1").toggleClass("bg-blue");
// }, 1000);

// setTimeout(()=>{
//         $("h1").toggleClass("bg-blue");
// }, 3000);

// $("h1").toggleClass("bg-blue");
// console.log($("h1").css({"background-color": "red", "font-size" : "50px"}));


        // dimensoes

// let box = $(".box");
// box.innerWidth(600)
// box.width(600)
// box.append("largura:", box.width(), "<br>",
//         "largura + padding:", box.innerWidth(), "<br>",
//         "largura + padding + borda:", box.outerWidth(), "<br>",
//         "largura + padding + borda + margem:", box.outerWidth(true)
// );

        // elementos irmaos

// let selected = $("#div3").siblings("#div4");
// let selected = $("#div3").nextAll(); // pega todos os depois
// let selected = $("#div3").next(); // pega apenas um somente depois
// let selected = $("#div3").prev(); // pega o ultimo elemento antes do que selecionamos
// let selected = $("#div3").prevAll(); // pegatodos os elementos antes do que selecionamos
// let selected = $("#div1").nextUntil("#div5"); // ele pega todos os elementos que tiveram sido declarados mais sejam ate um que vamos declarar por filtro
// console.log(selected);

        // Filter, last, first e eq

        // filter
// let selected = $("div").filter(".div1");
// console.log(selected);

// let selected = $("#container2").children().last();
// console.log(selected);

// let selected = $("#container2").children().first();
// console.log(selected);

// let selected = $("#container2").children().not(".div2");
// console.log(selected);

// let selected = $("#container2").children().eq(2);
// console.log(selected);