<?php
// This file is generated. Do not modify it manually.
return array(
	'wp-features' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jon-gutenberg-dev/wp-features',
		'version' => '1.0.0',
		'title' => 'Jon Gutenberg Dev Wp Features',
		'category' => 'text',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'default' => '// Enter your code here...'
			),
			'language' => array(
				'type' => 'string',
				'default' => 'javascript'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'jon-gutenberg-dev-wp-features',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
