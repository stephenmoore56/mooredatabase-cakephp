<?php
	$this->set('pageId', 'topTwenty');
	$this->set('title_for_layout', 'Top Twenty Species');
?>
<div data-role="content">
	<ul data-role="listview" data-filter="false" data-theme="c" data-divider-theme="a">
		<?php foreach($results as $bird) { ?>
			<li data-icon="info">
				<a href="/reports/species_dialog/<?= $bird['id'] ?>">
					<?= $bird['common_name'] ?>
					<span class="ui-li-count"><?= $bird['sightings'].' Sightings' ?></span>
				</a>
			</li>
		<?php } ?>
	</ul>		
</div>