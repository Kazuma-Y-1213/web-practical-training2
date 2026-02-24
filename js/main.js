/* input -> form */
  /* Unix & windows: OSによってコマンドがかわるんだからくらすもかわる(dir ls) 共通部分だけまとめてもいい？ extend common?*/
  /* Mac はしらん */
    /* CLISystem : CLI としての 機能の部分 メソッドとして実装
/* output -> console.log でよくない？*/
  /* ポートフォリオのコンセプトにCLI使うなんてとがったことするならいっそconsole.log使っても許される */

/* GUI 部分どうする */
/* img は欲しい */
/* 機能はこのままにするとしてもwebページとしてはもうちょい見栄え考えられるんじゃないか */
/* CLI オンリーで 攻めるのはどうかと思う */

/* htmlを cd ls etc... で移動するから hiddenのhtml構造でよくね */
/* バチバチに探索するのか dir名にあたるのがそのままidになるから 直で検索かけるのか */
/* 親dir /Portfolio/... であらわすから ここの表示システム 使いまわせるんじゃないか */

/*  */


class CLISystem{
  constructor(inputValue){
    this.inputValue = inputValue;
  }
  pwd(){

  }
  ls(){

  }
  chdir(){

  }
  mkdir(){

  }
}
class common{
  //共通してるところ書く cd とか 
}
class linux extends common{
// ls
// たくさん書く
}
class windows extends common{
// dir
}
