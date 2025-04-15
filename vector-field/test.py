import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import axes3d

plt.rcParams['figure.dpi'] = 300 
plt.rcParams['savefig.dpi'] = 300 

x, y, z = np.meshgrid(np.arange(-2, 2, .5),
                      np.arange(-2, 2, .5),
                      np.arange(-2, 2, .5))

u = y
v = -x
w = 0.5 * z

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Control length, color, and thickness
ax.quiver(
    x, y, z, u, v, w,
    length=0.2,         # Arrow length
    normalize=True,     # Normalize arrow size
    color='black',  # Arrow color
    linewidth=0.5       # Arrow thickness
)

plt.grid(False)
plt.axis('off')
plt.show()

