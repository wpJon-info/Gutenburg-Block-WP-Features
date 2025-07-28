import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { content, featureType, showBorder } = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Feature Settings', 'jon-gutenberg-dev-wp-features')}>
					<SelectControl
						label={__('Feature Type', 'jon-gutenberg-dev-wp-features')}
						value={attributes.featureType}
						options={[
							{ label: 'Callout', value: 'callout' },
							{ label: 'Highlight', value: 'highlight' },
							{ label: 'Notice', value: 'notice' },
							{ label: 'Alert', value: 'alert' }
						]}
						onChange={(featureType) => setAttributes({ featureType })}
						help={__('Select the type of feature block', 'jon-gutenberg-dev-wp-features')}
					/>
					<ToggleControl
						label={__('Show Border', 'jon-gutenberg-dev-wp-features')}
						checked={attributes.showBorder}
						onChange={(showBorder) => setAttributes({ showBorder })}
						help={__('Display a border around the feature', 'jon-gutenberg-dev-wp-features')}
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				tagName="div"
				className={`wp-features-content feature-${attributes.featureType}`}
				value={attributes.content}
				onChange={(content) => setAttributes({ content })}
				placeholder={__('Enter your feature content...', 'jon-gutenberg-dev-wp-features')}
			/>
		</div>
	);
}