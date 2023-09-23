# instructions

install dependancies: `yarn install`

run: `yarn dev`

open chrome task manager (`Shift + Esc`) and then click on `create new shared array buffer`, the memory footprint should increase by 25MB, now click again and again, it will keep increasing.

Now click the `Collect garbage` button in console's memory tab, the memory footprint will come down.
