import svgwrite

def create_mobile_menu_icon():
    # Create an SVG drawing object
    dwg = svgwrite.Drawing('mobile_menu_icon.svg', profile='tiny', size=(40, 20))
    
    # Set line properties
    stroke_width = 1.5
    line_length = 20
    offset_x = (40 - line_length) / 2  # Center the lines horizontally

    # Draw three lines
    dwg.add(dwg.line(start=(offset_x, 4), end=(offset_x + line_length, 4), stroke="black", stroke_width=stroke_width))
    dwg.add(dwg.line(start=(offset_x, 10), end=(offset_x + line_length, 10), stroke="black", stroke_width=stroke_width))
    dwg.add(dwg.line(start=(offset_x, 16), end=(offset_x + line_length, 16), stroke="black", stroke_width=stroke_width))

    # Save the drawing to a file
    dwg.save()

# Create the mobile menu icon
create_mobile_menu_icon()
