const dummyText = ['Halvah apple pie ice cream danish lollipop tart cotton candy. Gummies dessert cheesecake donut cheesecake. Macaroon jelly beans sugar plum brownie marzipan tootsie roll toffee halvah topping. Gummi bears sweet chocolate dragée macaroon. Cupcake topping macaroon sweet sweet. Cupcake soufflé chupa chups pudding cake candy canes. Cotton candy toffee fruitcake jelly beans cupcake fruitcake soufflé. Sesame snaps macaroon liquorice cake lollipop pudding tootsie roll. Pudding danish icing chocolate cake cheesecake muffin cookie tart.',
                   'Cake marzipan lemon drops biscuit powder bear claw dessert carrot cake sweet roll. Sweet roll jelly beans marshmallow oat cake cake tootsie roll. Gingerbread sugar plum tiramisu soufflé carrot cake tootsie roll chupa chups soufflé. Liquorice chocolate tiramisu donut fruitcake. Gingerbread cotton candy lollipop pastry macaroon topping. Tart wafer ice cream cake oat cake powder pie. Shortbread topping soufflé jelly lollipop. Marzipan cheesecake macaroon tiramisu wafer. Danish marshmallow wafer brownie halvah. Sweet roll marshmallow sweet roll tiramisu shortbread biscuit biscuit.',
                   'Sweet chocolate bar tootsie roll cupcake sweet cake. Fruitcake chocolate bar brownie sweet roll candy canes dessert caramels bonbon sesame snaps. Jelly beans halvah sugar plum halvah sugar plum marshmallow liquorice. Shortbread muffin soufflé brownie marzipan cotton candy. Gummi bears sesame snaps cake dessert chupa chups liquorice gingerbread. Caramels brownie apple pie wafer jelly gummi bears pie jelly-o chocolate bar. Gingerbread marshmallow wafer caramels croissant donut lollipop pie soufflé.',
                   'Lemon drops caramels candy lollipop cheesecake pudding biscuit sesame snaps. Bonbon biscuit sesame snaps sweet icing cheesecake gingerbread pudding cotton candy. Chocolate bar chocolate cake toffee dessert sugar plum sweet pastry. Dragée dragée cake cake fruitcake liquorice. Soufflé jelly-o pastry chocolate bar gummi bears sweet roll fruitcake gummies cookie. Cotton candy pie marshmallow candy canes sesame snaps bear claw. Croissant sweet gummi bears toffee chocolate cupcake. Pudding chocolate cake sweet roll shortbread chocolate cake chupa chups croissant tootsie roll. Dragée carrot cake lemon drops gummies jujubes jujubes cheesecake.',
                   'Dragée jelly-o oat cake donut brownie cheesecake. Chocolate bar chocolate cake cookie cotton candy chocolate oat cake. Jelly danish tootsie roll croissant cotton candy donut topping wafer. Tiramisu topping muffin halvah jelly beans jujubes candy canes candy canes chupa chups. Sweet roll bear claw tiramisu pudding candy. Chupa chups cookie apple pie chocolate bar danish liquorice cake. Macaroon jelly-o cookie ice cream chocolate cake jelly beans ice cream cheesecake. Dessert chocolate shortbread danish chocolate. Gingerbread chupa chups ice cream oat cake chocolate cake cake croissant shortbread cookie. Jujubes soufflé sesame snaps bonbon lollipop liquorice lemon drops chocolate bar lemon drops.',
                   'Powder sweet marzipan dragée danish brownie cotton candy. Lemon drops chocolate gummi bears lollipop marshmallow ice cream. Cake bonbon tootsie roll danish candy cookie pudding marshmallow. Dessert cake lollipop chocolate bar fruitcake danish carrot cake. Chocolate fruitcake candy canes muffin pudding marzipan gingerbread. Jelly macaroon lemon drops halvah candy canes cotton candy cotton candy pie chupa chups. Pudding lemon drops ice cream pastry tart sweet roll liquorice gummies. Croissant chocolate cake candy marzipan sugar plum.',
                   'Jelly-o marshmallow sesame snaps sweet biscuit. Lemon drops gummi bears cupcake toffee marshmallow marshmallow. Toffee danish marzipan ice cream chocolate. Jelly beans lemon drops cookie caramels chupa chups dessert danish cookie. Lollipop sweet biscuit sesame snaps candy canes powder pastry. Cookie gingerbread croissant liquorice sweet roll donut chocolate cake chocolate bar caramels. Lollipop icing danish marzipan croissant oat cake. Carrot cake powder wafer pastry halvah gummi bears powder. Gummies marzipan tart pudding fruitcake.',
                   'Marshmallow soufflé jujubes cupcake icing danish jelly beans brownie danish. Wafer cotton candy macaroon cookie croissant gummi bears. Pastry pastry cookie gummi bears sweet roll chocolate bar topping wafer gummi bears. Jelly bear claw jelly beans cheesecake chocolate cake chupa chups. Lollipop liquorice gummi bears candy caramels biscuit chocolate wafer marzipan. Candy canes oat cake bear claw pastry icing chocolate chupa chups tart dessert. Cake dragée candy canes tootsie roll ice cream topping bear claw gummies shortbread. Cake ice cream sweet roll jelly beans powder chocolate. Halvah lollipop pie sweet gingerbread.',
                   'Candy canes dragée powder wafer cupcake shortbread. Macaroon tart ice cream apple pie brownie pastry dessert. Tart tart dragée dessert caramels pudding sugar plum. Cookie pudding jelly beans wafer candy canes liquorice. Shortbread cake halvah cookie gummies. Soufflé jelly beans chocolate cake chupa chups marshmallow danish shortbread wafer sugar plum. Chupa chups chocolate bar fruitcake macaroon muffin chocolate bar cookie pudding. Gummi bears soufflé cake macaroon cake powder. Topping bear claw pie biscuit danish wafer ice cream croissant tiramisu. Topping croissant wafer topping cupcake tiramisu muffin donut.',
                ];

// selecting elements
const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');

// event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * dummyText.length);

    console.log(random);

// for empty, negative and greater than 9
if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p>${dummyText[random]}</p>`;
} else{
    const slicedArray = dummyText.slice(0, value);
    const finalArray = slicedArray.map(function (singleDummy) {
        return `<p>${singleDummy}</p>`
    })
    .join('');
// displaying fainal dummy text
    result.innerHTML = finalArray;

}
});