$(document).ready(() => {
    const eventRecommender = new EventRecommender();
    const user1 = new User();

    const event1 = new Event(987654, 'the party', '2020-06-18', 'pop', 'los angeles, CA', 'henry fonda theatre', 'a real fuckin party', '20:00');
    const event2 = new Event(2, '2', '2020-06-18', '2', '2', '2', '2', '2');
    const event3 = new Event(3, '3', '2020-06-18', '3', '3', '3', '3', '3');
    const event4 = new Event(4, '4', '2020-06-18', '4', '4', '4', '4', '4');
    const event5 = new Event(5, '5', '2020-06-18', '5', '5', '5', '5', '5');
    const event6 = new Event(6, '6', '2020-06-18', '6', '6', '6', '6', '6');


});


// $(document).ready(function() {
//     // console.log('myScript.js loaded!');
//     $('#red-sentence').click(function() {
//         // First remove the purple-text class in case it was added first.
//         $(this).removeClass('purple-text');
//         // Then add the red-text class to turn the sentence red.
//         $(this).addClass('red-text');
//     });

//     $('#blue-button').click(function() {
//         // We can also "chain" methods together like this:
//         $('#blue-sentence')
//             .removeClass('purple-text')
//             .addClass('blue-text');
//     });

//     $('#purple-button').click(function() {
//         $('.colorful-sentence').addClass('purple-text');
//     });
//     $('#red-sentence').hover(function() {
//         $('.colorful-sentence').removeClass('purple-text');
//     });
// });