# Usage


With JqueryUI

		<input type="text" id="wiki"/>
		<script>
		    $(document).ready(function () {
		        $("#wiki").sedcAutocomplete();
		    });
		</script>



Without JqueryUI

		<input type="text" id="wiki" data-results-panel-id="results"/>

		<div id="results">

		</div>

		<script>
		    $(document).ready(function () {
		        $("#wiki").sedcAutocompleteWithoutJqueryUI();
		    });
		</script>