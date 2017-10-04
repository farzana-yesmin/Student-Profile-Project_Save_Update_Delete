	var app=angular.module('MyApp',[]);
	app.controller('StudentProfileController',function($scope){
		
		$scope.studentProfileArray = [];

		$scope.saveStudentProfile = function () {

			if (!$scope.student_name)
			{
				alert("Enter Student Name");
			}
			else if (!$scope.father_name)
			{
				alert("Enter Father's Name");
			}
			else if (!$scope.mother_name) {
				alert("Enter Mother's Name");
			}
			else if (!$scope.roll_no) {
				alert("Enter Roll Number");
			}
			else {
				$scope.studentProfileArray.push({
					student_name : $scope.student_name,
					father_name : $scope.father_name,
					mother_name : $scope.mother_name,
					roll_no : $scope.roll_no
				});
				$scope.student_name="";
				$scope.father_name="";
				$scope.mother_name="";
				$scope.roll_no="";	
			}
		};
		
		var key;
		
		$scope.editStudentProfile = function (studentProfileObject, indexArray) {
			
			key = indexArray;
			$scope.student_name = studentProfileObject.student_name;
			$scope.father_name = studentProfileObject.father_name;
			$scope.mother_name = studentProfileObject.mother_name;
			$scope.roll_no = studentProfileObject.roll_no;
		};
		
		$scope.updateStudentProfile = function (student_name,father_name,mother_name,roll_no) {
			$scope.studentProfileArray[key].student_name = student_name;
			$scope.studentProfileArray[key].father_name = father_name;
			$scope.studentProfileArray[key].mother_name = mother_name;
			$scope.studentProfileArray[key].roll_no = roll_no;
			
			$scope.student_name="";
			$scope.father_name="";
			$scope.mother_name="";
			$scope.roll_no="";	
        };
		
		$scope.delete = function (id) {
            $scope.studentProfileArray.splice(id, 1);
        };
		
	});