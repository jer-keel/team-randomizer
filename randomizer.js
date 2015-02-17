$(document).ready(function() {

  $(".group-btn").click(function (event) {
      var team_num = $(event.currentTarget).attr("team-id");
      $("#team" + team_num + "-list").toggleClass("hidden");
  });
                         
  var masterlist = [0, 1, 2, 3, 4, 5];
  var mylist = [0, 1, 2, 3, 4, 5];
  var students = [

      ["Mike Doe", "Michelle Doe", "Alex Doe", "Jael Doe", "Christen Doe"],

      ["Andrew Doe", "Natalie Doe", "Sean Doe", "John Doe", "Matt Doe"],

      ["Kayla Doe", "Eric Doe", "Shi Doe", "Robert Doe", "Michael Doe"],

      ["Karen Doe", "Reann Doe", "Xiaomeng Doe", "Lan Doe", "Zhanglong Doe"],

      ["Christine Doe", "Kaitlin Doe", "Richard Doe", "Adam Doe", "Dominic Doe", "Daniel Doe"],

      ["Sydney Doe", "Tayler Doe", "Nate Doe", "Quentin Doe", "Will Doe"]

  ]

  for(var i = 0; i < students.length; i++) {
      var table_name = "team" + i + "-table";
      for(var j = 0; j < students[i].length; j++) {
          $("#" + table_name).append("<tr><td id=\"" + i + "-student-" + j + "\">" + students[i][j] + "</td></tr>");
      }
      
      $("#" + table_name).append("<tr><td><button class=\"btn btn-danger rand-speak\" data-index=\""+ i + "\">Random Speaker</button></td></tr>");
  }

  var selectedlist = [];
  var selectedindeces = [];
  var speaking_teams = []
  var written_teams = [];

  $("#random-btn").click(function () {
      var originalLength = masterlist.length;
      var numGroups = 3;
      mylist.splice(0, mylist.length);
      selectedindeces.splice(0, selectedindeces.length);
      for (var i = 0; i < masterlist.length; i++) {
          mylist[i] = masterlist[i];
      }

      for (var j = 0; j < numGroups; j++) {
          var selected_index = Math.floor(Math.random() * mylist.length);
          selectedindeces.push(mylist[selected_index]);
          console.log(selected_index);
          mylist.splice(selected_index, 1);
      }
      $("#mylist").html(mylist.toString());
      $("#selected_indeces").html(selectedindeces.toString());

      //$("#universe").empty();
      //for (var i = 0; i < mylist.length; i++){
      //    $("#universe").append("<li>"+mylist[i]+"</li>");
      //}
      //$("#selected_thing2").html(selectedlist.toString());
      for (var i = 0; i < selectedindeces.length; i++) {
          $("#team" + selectedindeces[i]).removeClass();
          document.getElementById("team" + selectedindeces[i]).className = "btn btn-success center-block btn-lg";
      }
      for (var i = 0; i < mylist.length; i++) {
          $("#team" + mylist[i]).removeClass();
          document.getElementById("team" + mylist[i]).className = "btn btn-info center-block btn-lg";
      }


  });

  $(".rand-speak").click(function (event) {
      var team_num = $(event.currentTarget).attr("data-index");
      //alert(team_num);
      
      for(var i = 0; i < students[team_num].length; i++) {
          $("#" + team_num + "-student-" + i).removeClass("success");
      }
      
      var selected_index = Math.floor(Math.random() * students[team_num].length);
      $("#" + team_num + "-student-" + selected_index).addClass("success");
  });

  $("#new_thing").click(function () {
      var selected_index = Math.floor(Math.random() * 3);
      var group_number = selectedindices[selected_index];
      var student_names = students[group_number];
      $("#selected_thing3").html(student_names.toString());
  });
});
