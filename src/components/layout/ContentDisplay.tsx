import { useActiveTabStore } from '../../store/activeTabStore';

export default function ContentDisplay() {
	const { activeTab } = useActiveTabStore();
	return (
		<div className="p-3">
			{activeTab === 'first' && (
				<>
					<h4>Management Content</h4>
					<p>Details about management go here.</p>
				</>
			)}
			{activeTab === 'second' && (
				<>
					<h4>Administratie Content</h4>
					<p>Details about administratie go here.</p>
				</>
			)}
			{activeTab === 'third' && (
				<>
					<h4>Communicatie Content</h4>
					<p>Details about communicatie go here.</p>
				</>
			)}
			{activeTab === 'fourth' && (
				<>
					<h4>Clubbeheer Content</h4>
					<p>Details about clubbeheer go here.</p>
				</>
			)}
		</div>
	);
}
