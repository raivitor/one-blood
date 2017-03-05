angular.module('starter.controllers', [])

.controller('CadastroCtrl', function($scope, User) {
  $scope.teste = ["Não sei","A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  
  $scope.submit = function () {
    usuario = {};
    usuario.nome = $scope.nome;
    usuario.nascimento = $scope.nascimento;
    usuario.tipoSanguineo = $scope.tipoSanguineo;
    usuario.senha = $scope.senha;
    console.log(usuario);
    User.cadastrar(usuario);
  }

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});