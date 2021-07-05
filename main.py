import eel, webbrowser

@eel.expose
def openGithub():
    webbrowser.open("https://github.com/ExtraLongBaguette")

eel.init('src', allowed_extensions=['.html', '.css'])
eel.start('index.html', size=(400,600))