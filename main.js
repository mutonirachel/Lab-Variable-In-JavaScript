// LAB VARIABLES ASSIGNMENT


 let tittle = ["Name", "Phone", "Email"];  // Table headings

 // Table info, array that contains other arrays (nested arrays)

 let people = [["Maxwell Wright", "(0191) 719 6495)", "Curabitur.egestas.nunc@nonummyac.co.uk"], 
               ["Raja Villarreal", "0866 398 2895", "posuere.vulputate@sed.com"], 
               ["Helen Richards", "0800 1111", "libero@convallis.edu"]];

 // Assigning the nested arrays

 let user1= people[0];
 let user2 = people[1];
 let user3= people[2];

 // display all the info of three people

 console.log(        `     ${tittle[0]}                              ${tittle[1]}                                 ${tittle[2]}`);
 console.log(  `${user1[0]}                  ${user1[1]}               ${user1[2]}`);
 console.log(  `${user2[0]}                 ${user2[1]}                  ${user2[2]}`);
 console.log(  `${user3[0]}                  ${user3[1]}                      ${user3[2]}`);


