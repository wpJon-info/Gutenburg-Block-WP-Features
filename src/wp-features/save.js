/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { content, featureType, showBorder } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`feature-type-label ${featureType}`}>{featureType}</div>
			<RichText.Content
				tagName="div"
				className={`wp-features-content feature-${featureType} ${showBorder ? 'has-border' : ''}`}
				value={content}
			/>
		</div>
	);
}