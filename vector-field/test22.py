import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Circle
from matplotlib.colors import LinearSegmentedColormap

outside_color = "#09f"  
inside_color = "#f00"  

custom_cmap = LinearSegmentedColormap.from_list("custom_gradient", [outside_color, inside_color])

charge1_pos = (-20, -50)
charge2_pos = (30, 0)
charge3_pos = (10, 30)   
q1, q2, q3 = 1, -1, 1 

x = np.linspace(-50, 50, 1000)
y = np.linspace(-75, 75, 1500)
X, Y = np.meshgrid(x, y)

def e_field(q, pos, X, Y):
    dx = X - pos[0]
    dy = Y - pos[1]
    r2 = dx**2 + dy**2
    r = np.sqrt(r2)
    r3 = np.where(r2 == 0, np.inf, r2 * r)
    Ex = q * dx / r3
    Ey = q * dy / r3
    return Ex, Ey

Ex1, Ey1 = e_field(q1, charge1_pos, X, Y)
Ex2, Ey2 = e_field(q2, charge2_pos, X, Y)
Ex3, Ey3 = e_field(q3, charge3_pos, X, Y)
Ex = Ex1 + Ex2 + Ex3
Ey = Ey1 + Ey2 + Ey3

fig, ax = plt.subplots(figsize=(6, 9)) 

circle1 = Circle(charge1_pos, 2, color='#f00', zorder=5)
circle2 = Circle(charge2_pos, 2, color='#f00', zorder=5)
circle3 = Circle(charge3_pos, 2, color='#f00', zorder=5) 
ax.add_patch(circle1)
ax.add_patch(circle2)
ax.add_patch(circle3)

strm = ax.streamplot(
    x, y, Ex, Ey,
    color=np.log(np.hypot(Ex, Ey)),
    linewidth=3,
    cmap=custom_cmap,
    density=1.5,
    arrowstyle='->'
)

ax.set_aspect('equal')
ax.set_xlim(-50, 50)
ax.set_ylim(-75, 75)
ax.axis('off')
plt.tight_layout(pad=0)

plt.savefig('electric_field_three_charges.svg', format='svg', bbox_inches='tight', transparent=True)

plt.show()
