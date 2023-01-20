function chapter3 () {
	
}
function chapter2 () {
	
}
function chapter1 () {
	
}
let chooseChapter = game.askForString("what chapter do you want to read?", 9)
if (chooseChapter == "chapter 1") {
    chapter1()
} else if (chooseChapter == "chapter 2") {
    chapter2()
} else if (chooseChapter == "chapter 3") {
    chapter3()
} else {
    game.splash("please retype your answer as \"chapter 1\",\"chapter 2\", or \"chapter 3\"")
}
