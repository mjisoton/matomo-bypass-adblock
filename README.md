# matomo-bypass-adblock

In an effort to find a way to collect metrics on approximately 250 websites, I've been doing my research. 
Nowadays, it doesn't matter which platform you choose for that. _Google Analytics, Plausible, Matomo_... probably all of them are blocked, either parcially or completely, by adblockers and similar. 
It doesn't matter if you collect in a '_opt-in_' policy, they don't care about your visitor's choice. They will block either way. 

Since I'm using **Matomo** ([here](https://matomo.org/)), here's what I did to have my selfhosted instance work without being blocked (for now):

1. If you created a domain or subdomain for your instance, make no mention of the word '_matomo_' anywhere. '_https://matomo.mydomain.com_' is a bad idea, for example. Try using a different word, like '_metrics_', '_statistics_', '_collect_'... anything else.

2. The default behaviour (calling _matomo.js_ and _matomo.php_ from javascript tracking code) need to be changed. To do that, you will have to set up your HTTP server (apache, nginx, etc...) to rewrite the requests to the original files using new names. You will choose a different word, and replace in the tracking code.
For example, if you are using apache, the '.htaccess' file above is a good start.

3. Some very popular blocklists have a rule to block any '_beacon request_'. By default, Matomo uses the [Beacon API](https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API) of the browser to send requests to the selfhosted instance, so you will have to disable it with `disableAlwaysUseSendBeacon`. These 'Beacon Requests' appear as '_ping_' on the Network tab of the Developer Tools on Google Chrome. 

4. Again, some very popular blocklists have the rule to block the '_.php?action_name=_' part of the tracking URL (Crazy, right? That's way to invasive). So insted of using _GET_ requests, you will have to configure the tracking code to use _POST_ requests. 

After you've done everything, then there's a change that your code will not be blocked. Obviously, I recommend only tracking the visitor after he/she gave the consent. On Matomo, that's pretty easy. The 'tracking-code.js' file above is the final example.

Ah, after the visitor gave the consent, just call `_paq.push(["setConsentGiven"]);`. Otherwise, your code will load, but it wont send any request to your instance.
