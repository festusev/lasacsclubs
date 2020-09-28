from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def index():
    return render_template('index.html')


@app.route('/demo_url', methods=['POST'])
def demo_url():
    return 'You found the demo!'


if __name__ == '__main__':
    app.run()
