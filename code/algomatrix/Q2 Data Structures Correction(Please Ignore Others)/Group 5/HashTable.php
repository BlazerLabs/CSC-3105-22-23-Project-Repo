<?php
class HashTable {
    protected $size;
    protected $buckets;

    public function __construct($size = 10) {
        $this->size = $size;
        $this->buckets = array_fill(0, $size, []);
    }

    protected function hash($key) {
        return crc32($key) % $this->size;
    }

    public function set($key, $value) {
        $index = $this->hash($key);
        foreach ($this->buckets[$index] as &$item) {
            if ($item['key'] === $key) {
                $item['value'] = $value;
                return;
            }
        }
        $this->buckets[$index][] = ['key' => $key, 'value' => $value];
    }

    public function get($key) {
        $index = $this->hash($key);
        foreach ($this->buckets[$index] as $item) {
            if ($item['key'] === $key) {
                return $item['value'];
            }
        }
        return null;
    }

    public function delete($key) {
        $index = $this->hash($key);
        foreach ($this->buckets[$index] as $i => $item) {
            if ($item['key'] === $key) {
                unset($this->buckets[$index][$i]);
                return;
            }
        }
    }

    public function display() {
        foreach ($this->buckets as $index => $bucket) {
            echo "Bucket $index: ";
            $items = [];
            foreach ($bucket as $item) {
                $items[] = "{$item['key']}: {$item['value']}";
            }
            echo implode(', ', $items) . "\n";
        }
    }
}