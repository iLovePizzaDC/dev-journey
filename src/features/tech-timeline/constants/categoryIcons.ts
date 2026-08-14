import {
	BeakerIcon,
	CircleStackIcon,
	ClipboardDocumentListIcon,
	CloudIcon,
	ServerStackIcon,
	Squares2X2Icon,
	WindowIcon,
	WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import type { TechCategoryFilter } from '@/features/tech-timeline/types';
import type { IconComponent } from '@/shared/types';

export const CATEGORY_FILTER_ICONS: Record<TechCategoryFilter, IconComponent> = {
	all: Squares2X2Icon,
	frontend: WindowIcon,
	backend: ServerStackIcon,
	database: CircleStackIcon,
	testing: BeakerIcon,
	devops: CloudIcon,
	tools: WrenchScrewdriverIcon,
	process: ClipboardDocumentListIcon,
};
