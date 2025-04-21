import yaml
from pathlib import Path

class ContentLoader:

    def __init__(self, folder_path: str):
        self.folder_path = folder_path

    def get_yaml_content(self):
        content = []
        
        for file_path in Path(self.folder_path).rglob('*'):
            if file_path.is_file() and file_path.suffix in [".yml", ".yaml"]:
                with open(file_path) as f:
                    content.append(yaml.safe_load(f))
                    
        return content      

    def sort_content_by(self, type:str):
        # sort by alphabetical or date
        content = self.get_yaml_content()

    def filter_content_by(self, tag:str):
        # filter by tag name
        content = self.get_yaml_content()

    def group_content_by(self, tag:str):
        # groups tag name (specail case 'curated')
        content = self.get_yaml_content()
