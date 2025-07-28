import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	
	const { content } = attributes;
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton 
						title="Button 1"
						icon="admin-generic"
						isActive={true}
						onClick={() => console.log("Button one clicked")}
					/>
					<ToolbarButton 
						title="Button 2"
						icon="admin-collapse"
						isActive={false}
						onClick={() => console.log("Button two clicked")}
					/>
				</ToolbarGroup>

				{content && 
					<ToolbarGroup>
						<ToolbarButton 
							title="Align Left"
							icon="editor-alignleft"
							onClick={() => console.log('Align left')}
						/>
						<ToolbarButton 
							title="Align Center"
							icon="editor-aligncenter"
							onClick={() => console.log('Align center')}
						/>
						<ToolbarButton 
							title="Align Right"
							icon="editor-alignright"
							onClick={() => console.log('Align right')}
						/>

						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={__('More Alignments', 'text-box')}
							controls={[
								{
									title: __('Wide', 'text-box'),
									icon: 'align-wide',
									onClick: () => console.log('Wide alignment')
								},
								{
									title: __('Full', 'text-box'),
									icon: 'align-full',
									onClick: () => console.log('Full alignment')
								}
							]}
						/>
					</ToolbarGroup>
				}
			</BlockControls>

			<RichText  
				{ ...useBlockProps() } 
				value={content}
				onChange={(value) => setAttributes({ content: value })}
				placeholder={__("Your Text", "wp-features")}
				tagName="h4"
				allowedFormats={['core/bold']}
			/>
		</>
	);
}