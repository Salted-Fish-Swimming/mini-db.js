import { mkdir, readFile, writeFile } from "fs/promises";
import { dirname } from "path/win32";

class TextFile {

  constructor (filepath, defaultContent = '') {
    this.filepath = filepath;
    this.defaultContent = defaultContent;
  }

  async read () {
    let content = this.defaultContent;
    try {
      content = await readFile(this.filepath, { encoding: 'utf-8' });
    } catch (err) {
      if (err.code === 'ENOENT') {
        await mkdir(dirname(this.filepath), { recursive: true });
        await writeFile(this.filepath, content, { encoding: 'utf-8' });
      } else {
        throw err;
      }
    }
    return content;
  }

  async write (content) {
    content = content ?? this.defaultContent;
    try {
      await writeFile(this.filepath, content, { encoding: 'utf-8' });
    } catch (err) {
      if (err.code === 'ENOENT') {
        await mkdir(dirname(this.filepath), { recursive: true });
        await writeFile(this.filepath, content, { encoding: 'utf-8' });
      } else {
        throw err;
      }
    }
  }

}

export { TextFile }
