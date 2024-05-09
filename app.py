from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/change_color/<color>')
def change_color(color):
    # Logic to change the circle color based on the button clicked
    # You can use the 'color' parameter to determine the new color
    # For example: if color == 'red', set the circle color to red
    # Implement your own logic here
    if color == 'red':
        circle_color = 'red'
    elif color == 'green':
        circle_color = 'green'
    elif color == 'yellow':
        circle_color = 'yellow'
    else:
        # Handle invalid color (optional)
        circle_color = 'gray'  # Default color
    # Return a response (e.g., success message)
    return f'Circle color changed to {color}'


if __name__ == '__main__':
    app.run(debug=True)
