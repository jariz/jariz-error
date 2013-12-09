<a href="https://raw.github.com/jariz/jariz-error/master/screen.png"><img src="https://raw.github.com/jariz/jariz-error/master/screen.png" width="200" align="right"></a>
__What is it?__  
This mod attempts to improve upon the existing error handling in GDT which is a simple popup that barely gives any actual information.  
The current error handling is both not user friendly as it is developer friendly because users have no idea what's happening (vague popup) and developers can't help the users because of the little information the popup provides.  
This mod does not affect your gameplay, in any way, until the game hits an (uncaught) error of which it can't recover, then this mod will come in to play.
It will collect data and dump it into a JSON object you can browse trough from the error page.  
You can also copy this object and for example paste it on the forums or email it to GHG support.

__Why?__  
Because I'm tired of the 'I got an uncaught error' posts that provide zero to nothing information on what the actual errror is, so I whipped up this little mod in a few hours.  

This approach is:  

 - More userfriendly
 - More developer friendly

__Resources__
[Bootstrap][1]
[PRETTYJSON][2]


__Remarks__  
I do admit that there is a problem with this approach: The game scripts keep running and because this mod removes the entire DOM it might cause further errors, however, the mod blocks any further errors after showing the page, so you probably won't even notice, however, your console will probably get spammed with exceptions.

[[img]https://easycaptu.re/cpfRw.png[/img]][3]


  [1]: http://getbootstrap.com
  [2]: https://github.com/warfares/pretty-json
  [3]: https://github.com/jariz/jariz-error/archive/master.zip
