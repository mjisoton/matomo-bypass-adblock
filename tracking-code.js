<script>
	var _paq = window._paq || [];
	_paq.push(["requireConsent"]);
	_paq.push(["setRequestMethod", "POST"]);
	_paq.push(["disableAlwaysUseSendBeacon"]);
	_paq.push(["enableHeartBeatTimer"]);
	_paq.push(["trackPageView"]);
	_paq.push(["enableLinkTracking"]);
	
	(function () {
		var u = "HTTPS://METRICS.YOURDOMAIN.COM/";
		_paq.push(["setTrackerUrl", u + "poop.php"]);
		_paq.push(["setSiteId", "YOUR_SITE_ID_ON_MATOMO"]);
		var d = document, g = d.createElement("script"),s = d.getElementsByTagName("script")[0];
		g.type = "text/javascript";g.async = true;g.defer = true;g.src = u + "poop.js";s.parentNode.insertBefore(g, s);
	})();
</script>
